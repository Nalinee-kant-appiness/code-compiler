import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body;

    if (!body.code) {
      return res.status(400).json({ error: 'Code is required in the request body' });
    }

    const options = {
      method: 'POST',
      url: 'https://online-code-compiler.p.rapidapi.com/v1/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
      },
      data: body,
    };

    try {
      const response = await axios.request(options);
      console.log('fetched successfully');
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    res.status(405).end(); 
  }
}
