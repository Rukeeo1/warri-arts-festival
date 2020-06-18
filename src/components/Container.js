import React from 'react'
import { Nav } from './NavBar'
import { HomePage } from './Body'

export class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            home: "Warri  Art Festival"
        }
      }


    render() {
        return(
            <React.Fragment>
            <Nav values={this.state.home}/>
            <HomePage/>
            </React.Fragment>
        )}}

