import React from 'react'

export default function Details (props) {
  return (
    <div class='bg'>
        <div class="body">
      <div>
        <header class="header">
        <a href='#' onClick={props.close}>
          Back to the first page
        </a>
        </header>
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>Author: {props.author}</p>
        <img src={props.image}></img>
        <p>{props.description}</p>
      </div>
      <div>
        <footer class='FON'>
          <p>Valtteri Pitkänen 2021</p>
        </footer>
      </div>
      </div>
    </div>
  )
}
