import React, { useEffect } from 'react';

import { Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadingDone, setList } from '../action/controlAction';

import $ from 'jquery';

import IndexList from "./List";
import PageContent from "./Page/Content";

const Layout = (props) => {
    const dispatch = useDispatch();
    // const data = useSelector(state => state.data);
    // const loading = useSelector(state => state.loading);
    const {data, loading} = useSelector(state => state)

    useEffect(() => {
        // console.log(props.match.params.page)
        // console.log(props.match.params.id)
        // if(props.match.params.page) {
        //     getAttractions(props.match.params.page)
        // } else {
        //     getAttractions('1')
        // }

        // getAttractions('1')
        setTimeout(() => {
            dispatch(loadingDone())
        }, 3000)
    }, [])

    const getAttractions = (e) => {
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const url = `https://www.travel.taipei/open-api/zh-tw/Attractions/All/?page=${e}`;
        $.ajax({
            url: `${cors}${url}`,
            method: 'GET',
            dataType: 'json',
            headers: {
                "Access-Control-Allow-Headers": "X-Requested-With",
                "X-Requested-With": "XMLHttpRequest"
            },
            data: []
        })
            .done((success) => {
                console.log(success)
                dispatch(setList(success.data))
            })
            .fail((error) => {
                console.log(error)
            })
    }
    return (
        loading ? <div className="loading"><span>Loading...</span></div> :
            <>
                {/* <Route exact path='/' component={() => <IndexList/>} />
                <Route path='/:id'
                    render={(props) => (
                        <PageContent {...props} data={data} />
                    )} /> */}

                <Route exact path='/' component={() => <IndexList/>} />
                <Route path='/:id'
                    render={(props) => (
                        <PageContent {...props} data={data} />
                    )} />

                    {/* <Route exact path='/creative/jeffrey/homework/' component={() => <IndexList/>} />
                <Route path='/creative/jeffrey/homework/:id'
                    render={(props) => (
                        <PageContent {...props} data={data} />
                    )} /> */}
            </>
    );
}

export default Layout;