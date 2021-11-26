import React from 'react'
import "./Css/liveChannel.css";

function LiveChannel() {
    return (
        <>
        <h4 className="livetext">KOKAaCatt will be live on two platforms for now. Join <i>The Maggies Official</i> for more detail and to know the future live streams and platforms.</h4>
        <div className="live">
          
            <div className="facebook">
                <h5>Facebook</h5>
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F215799693772816%2Fvideos%2F434904071410778%2F&show_text=false&width=560&t=0" width="560" height="314" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            </div>
            <div className="youtube">
                <h5>YouTube </h5>
                <iframe width="560" height="320" src="https://www.youtube.com/embed/7P85QGP8tBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        </>
    )
}

export default LiveChannel
