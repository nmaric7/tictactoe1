import React from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
    render() {

        return (
          <ul className={'nav nav-pills'}>
              <li className={'nav-item'}>
                  <Link className={'nav-link'} to={'/'}>Home</Link>
              </li>
              <li className={'nav-item'}>
                  <Link className={'nav-link'} to={'/tictactoe/v1'}>Learned</Link>
              </li>
              <li className={'nav-item'}>
                  <Link className={'nav-link'} to={'/tictactoe/v2'}>Self learning</Link>
              </li>
              <li className={'nav-item'}>
                  <Link className={'nav-link'} to={'/tictactoe/v3'}>Autoplay</Link>
              </li>
          </ul>
        );
    }
}
