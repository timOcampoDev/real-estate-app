const express = require( 'express' );
const router = express.Router();

/**
 * @route   GET api/realtor
 * @desc    TEST ROUTE
 */

router.get( '/test' , (req, res)=> res.send( 'realtor WORKS' ));

module.exports = router