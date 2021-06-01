import AWS from 'aws-sdk';

AWS.config.update({
    credentials: {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET
    }
});

export const uploadPhoto = async (file, userId) => {
    const { filename, createReadStream } = await file;
    const objectName = `${userId}-${Date.now()}-${filename}`;
    const readStream = createReadStream();

    const { Location } = await new AWS.S3().upload({
        Bucket: "instaclone-uploads-inch-version",
        key: objectName,
        ACL: "public-read",
        Body: readStream// file  (Stream)
    }).promise();

    return Location;
};