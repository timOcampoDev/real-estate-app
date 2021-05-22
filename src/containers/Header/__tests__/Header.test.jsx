import React from 'react';
import {shallow} from 'enzyme';
import { MuiThemeProvider } from "@material-ui/core";
import { THEME } from "../../../styles/Theme";
import Header from "../Header";

/**
 * see : https://medium.com/swlh/react-testing-using-jest-along-with-code-coverage-report-7454b5ba0236
 */

describe('Header', ()=>{
    const wrapper = ( props )=>{
        return(
            shallow(
                <MuiThemeProvider theme={THEME}>
                    <Header/>
                </MuiThemeProvider>)
        )
    };

    it('renders w/o crashing', ()=>{
        expect(wrapper().length).toStrictEqual(1)
    })

})