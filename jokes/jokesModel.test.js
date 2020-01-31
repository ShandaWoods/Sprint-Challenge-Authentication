const Jokes = require('./jokes-model.js');
const db = require('../data/dbConfig.js');

describe('jokes model', function() {
    
    
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
    
    describe('insert()', function() {
        beforeEach(async () => {
            await db('jokes').truncate();
        })

        it('adds the new joke to the db', async function() {
            // call insert passing a joke
            await Jokes.insert({ name: 'Laffs' });
            await Jokes.insert({ name: 'Yuk Yuks' });

            // open the db and see that the joke is there
            const jokes = await db('jokes');

            expect(jokes).toHaveLength(2);
        })
        
        it('adds the new jokes to the db', async function() {
            // call insert passing a joke
            await Jokes.insert({ name: 'Laffs' });
            await Jokes.insert({ name: 'Yuk Yuks' });

            // open the db and see that the joke is there
            const jokes = await db('jokes');

            expect(jokes).toHaveLength(2);
        })


    })
    describe('delete()', function() {
        beforeEach(async () => {
            await db('jokes').truncate();
        })

        it('removes the joke from the db', async function() {
            // check that the table is empty

            // add a joke

            // check that the joke is there

            // delete the joke

            // check that the joke is gone 
        
        })


    })
    
})

