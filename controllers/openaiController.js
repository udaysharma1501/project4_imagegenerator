// contains all the logic for image generation with the openAI API key

// async - because openai library returns a promise
const generateImage = async (req, res) => {

  res.status(200).json({
    success: true,
  });

};

module.exports = { generateImage };
