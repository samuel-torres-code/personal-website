import React from 'react'

export default function ProjectCard(props) {
    const name = props.name
    const picUrl = props.picUrl
    const url = props.url



    return (<a class="card" href={url} target="_blank">
                <div class="polaroid">
                    <img src={picUrl} alt={`logo for ${name}`}/>
                    <div class="caption">
                        {name}
                    </div>
                </div>
                
            </a> )

}

