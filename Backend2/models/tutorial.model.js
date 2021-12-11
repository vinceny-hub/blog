module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          comments: String,
          posts: String,
          users: String
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };