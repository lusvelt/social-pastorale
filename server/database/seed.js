const { User } = require('./models');

const seed = async () => {
    const users = [
        await User.create({
            username: 'Name',
            email: 'name.surname@example.com',
            password: 'password',
            isMod: true
        })
    ];
};

module.exports = seed;