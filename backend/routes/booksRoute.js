import { Book } from '../models/bookModel.js';
import express from 'express';

const router = express.Router();

// Rest of your code...


// Route for Save a new Book
router.post('/', async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear
    ) {
      return res.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


router.get('/',async(req,res)=>{
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
})

router.get('/:id',async (req,res)=>{
  try {
    const {id} = req.params
    const book = await Book.findById(id);
    return res.status(200).json(book)

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
})


router.put('/:id', async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    const { id } = req.params; // Extract the 'id' from the request params.

    if (!title || !author || !publishYear) {
      return res.status(400).json({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    // Use findByIdAndUpdate to update the book by its ID.
    // Pass { new: true } to return the updated document.
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json({ message: 'Book Update success', data: updatedBook });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});



router.delete('/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
})

export { router as bookRoutes }; // Exporting the router with an alias 'bookRoutes'
