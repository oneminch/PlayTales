import supabase from "../config/supabase";

const getProductPoster = (productId: string) => {
  const { data } = supabase.storage
    .from("PlayTales")
    .getPublicUrl(`posters/${productId}.png`);

  return data.publicUrl;
};

const getProductScreenshots = async (productId: string) => {
  const screenshotFolder = `screenshots/${productId}`;
  const { data, error } = await supabase.storage
    .from("PlayTales")
    .list(screenshotFolder);

  if (error) {
    return [];
  }

  const screenshots = data.map((screenshot) => {
    const { data } = supabase.storage
      .from("PlayTales")
      .getPublicUrl(`${screenshotFolder}/${screenshot.name}`);
    return data.publicUrl;
  });

  return screenshots;
};

export { getProductPoster, getProductScreenshots };
