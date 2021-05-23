import client from '../client';

export default{
    Mutation: {
        createAccount: async (_, {
            id,
            firstName,
            lastName,
            userName,
            email,
            password,
        }) => {
            const existingUser = await client.user.findUnique({
                where: {
                    OR: [
                        {
                            userName,
                        },{
                            email,
                        }
                    ]
                }
            });

        }
    },
}