// Import express, modelFile and database
import express from "express"



const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/home',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public/script.js'));
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
// Use Middleware express.static and express.urlencoded


// Run the server (Listen Function)

// View todo
app.get("/", async (req, res) => {
  //Fetch tasks from database
  res.render("task.ejs");

  });

// Handle Add task Request
app.post("/add-task", async (req, res) => {
   
  });

// Delete Request to delete task by ID
app.delete("/tasks/:id", async (req, res) => {
   
  });
  
