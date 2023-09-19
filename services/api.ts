import axios from "axios";

export const getAgents = async () => {
  try {
    const res = await axios.get(
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true "
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};


export const getUnicAgent = async (id: string) => {
  try {
    const res = await axios.get(`https://valorant-api.com/v1/agents/${id}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};