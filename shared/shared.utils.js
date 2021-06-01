import AWS from 'aws-sdk';

AWS.config.update({
    credentials: {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET
    }
});

export const uploadToS3 = async (file, userId, folderName) => {
    const { filename, createReadStream } = await file;
    const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
    const readStream = createReadStream();

    const { Location } = await new AWS.S3().upload({
        Bucket: "instaclone-uploads-inch-version",
        Key: objectName,
        ACL: "public-read",
        Body: readStream// file  (Stream)
    }).promise();

    return Location;
};