import Post from '../models/post.model.js';
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    next(errorHandler(403, 'You are not allowed to create a post'));
  }
  if (!req.body.title || !req.body.content) {
    next(errorHandler(400, 'Please provice all required fields'));
  }

  // making a slug for better SEO (part of a URL that identifies a particular page on a website)
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '-');
  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    next(error);
  }
};

export const getposts = async (req, res, next) => {
  try {
    // start of the posts we want to get
    const startIndex = parseInt(req.query.startIndex) || 0;
    // the limit of the posts we want to get
    const limit = parseInt(req.query.limit) || 9;
    // the order of the posts we want to get
    const sortDirection = req.query.order === 'asc' ? 1 : -1;

    const posts = await Post.find({
      // searching post based on userId
      ...(req.query.userId && { userId: req.query.userId }),
      // searching post based on category
      ...(req.query.category && { category: req.query.category }),
      // searching post based on slug
      ...(req.query.slug && { slug: req.query.slug }),
      // searching post based on postId
      ...(req.query.postId && { _id: req.query.postId }),
      // searching post based on title & content
      ...(req.query.searchTerms && {
        // $or allow us to search between multiple conditions
        $or: [
          // $options: 'i' means case insensitive
          { title: { $regex: req.query.searchTerms, $options: 'i' } },
          { content: { $regex: req.query.searchTerms, $options: 'i' } },
        ],
      }),
      // sorting the posts based on updatedAt
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalPosts = await Post.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    // get last month posts
    const lastMonthPosts = await Post.countDocuments({
      updatedAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({ posts, totalPosts, lastMonthPosts });
  } catch (error) {
    next(error);
  }
};

export const deletepost = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    next(errorHandler(403, 'You are not allowed to delete this post'));
  }

  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json('The post has been deleted');
  } catch (error) {
    next(error);
  }
};

export const updatepost = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    next(errorHandler(403, 'You are not allowed to update this post'));
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      {
        $set: {
          title: req.body.title,
          category: req.body.category,
          image: req.body.image,
          content: req.body.content,
        },
      },
      // make the updatedUser as a new user data
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};
