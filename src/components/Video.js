import React from 'react'
import '../components/CSS/Video.css'

const Video = (props) => {

    const reactLike = () => {
        console.log("Like");
        props.showAlert("👍", "primary", "Liked It!");
    } 
    const reactLove = () => {
        console.log("Love");
        props.showAlert("🥰", "danger", "Loved It!");

    } 
    const reactHaha = () => {
        console.log("Haha");
        props.showAlert("😂", "success", "Very Funny!");

    } 
    const reactWow = () => {
        console.log("Wow");
        props.showAlert("🤩", "primary", "Awesomeee!!!");

    } 
    const reactSad = () => {
        console.log("Sad");
        props.showAlert("😢", "light", "I want to learn but don't have a Guitar...");

    } 
    const reactAngry = () => {
        console.log("Angry");
        props.showAlert("😠", "dark", "Boring Tutorial, Wasted my time...");

    } 

  return (
    <>
        <div className="container mt-5" style={{backgroundColor : "#131212"}}>
            <article>
                <h1>Learn Guitar in 10 Days!</h1>
                <div className="video-grid">
                    <div className="video-item">
                        <div className="video-wrap">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/BBz-Jyr23M4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="react">
                        <div className="react-me">
                            <div className="inner">
                                <div className="react-box">
                                    <ul>
                                        <li className="like" data-hover="Like" onClick={reactLike}></li>
                                        <li className="love" data-hover="Love" onClick={reactLove}></li>
                                        <li className="haha" data-hover="Haha" onClick={reactHaha}></li>
                                        <li className="wow" data-hover="Wow" onClick={reactWow}></li>
                                        <li className="sad" data-hover="Sad" onClick={reactSad}></li>
                                        <li className="angry" data-hover="Angry" onClick={reactAngry}></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
        </div>
    </>
  )
}

export default Video