import React from 'react';
import {Provider} from "react-redux";
import store from "../../../store";
import { MuiThemeProvider } from "@material-ui/core";
import { useStyles } from "../../../styles/Theme";
import {shallow , mount} from 'enzyme'
import { THEME } from "../../../styles/Theme";
import Header from "../Header";

/**
 * see : https://medium.com/swlh/react-testing-using-jest-along-with-code-coverage-report-7454b5ba0236
 */

describe('Header', ()=>{

    const wrapper = mount(
        <Provider store={store}>
            <MuiThemeProvider theme={THEME}>
                <Header/>
            </MuiThemeProvider>
        </Provider>
    )

    it('renders w/o crashing', ()=>{
        expect(wrapper.length).toStrictEqual(1)
    })

})