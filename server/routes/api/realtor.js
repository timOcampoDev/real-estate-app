const express = require( 'express' );
const router = express.Router();
const unirest = require("unirest");

/**
 * @route   GET api/realtor
 * @desc    TEST ROUTE
 */

router.get( '/test' , (req, res)=> res.send( 'realtor WORKS' ));

/**
 * @route   GET api/query-listings
 * @desc    Gets query result for property listings
 */

router.get( '/query-listings/:query', (req, res)=>{
    //TODO : Uncomment when ready to make query api calls.
    console.log( req.params.query  , 'what is req??')
    const submittedQuery = req.params.query

    const request = unirest("GET", "https://realtor.p.rapidapi.com/locations/auto-complete"),
        HOST = process.env.HOST_NAME_REALTOR,
        SECRET= process.env.SECRET_REALTOR;

    request.query({
        "input": submittedQuery
    });

    request.headers({
        "x-rapidapi-key": SECRET,
        "x-rapidapi-host": HOST,
        "useQueryString": true
    });

    request.end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log('WHAT IS THE REQUEST NOW', res.body);
    });
});

module.exports = router