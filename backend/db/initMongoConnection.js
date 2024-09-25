import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
    try {
        const user = env('MONGODB_USER');
        const pwd = env('MONGODB_PASSWORD');
        const url = env('MONGODB_URL');
        const db = env('MONGODB_DB');

        // Логування змінних підключення для перевірки
        console.log('MongoDB connection details:', { user, pwd, url, db });

        console.log('Attempting to connect to MongoDB...');

        // Спроба підключення до MongoDB
        await mongoose.connect(
            `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
        );

        // Якщо підключення успішне
        console.log('Mongo connection successfully established!');
    } catch (e) {
        // Якщо сталася помилка
        console.log('Error while setting up mongo connection', e);
        throw e;
    }
};

