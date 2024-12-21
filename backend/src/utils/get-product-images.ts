import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const getProductPoster = (productId: string) => {
  return `https://playtales-cdn.minch.dev/posters/${productId}.png`;
};

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET_NAME
} = process.env;

const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY
  }
});

const getProductScreenshots = async (productId: string) => {
  const screenshotFolder = `screenshots/${productId}`;

  try {
    const listCommand = new ListObjectsV2Command({
      Bucket: R2_BUCKET_NAME,
      Prefix: screenshotFolder
    });

    const { Contents } = await s3Client.send(listCommand);

    if (!Contents) {
      return [];
    }

    const screenshots = Contents.map(
      (object) => `https://playtales-cdn.minch.dev/${object.Key}`
    );

    return screenshots;
  } catch (error) {
    console.error("Error fetching screenshots:", error);
    return [];
  }
};

export { getProductPoster, getProductScreenshots };
