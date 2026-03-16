import styles from './Comments.module.css';

function Comments(props){
    return(
         <div className={styles.Comments}>
            <div className={styles.Comment}>
                <h3>{props.comments} </h3>         
                <h2>{props.author} </h2>         
            </div>
        </div> 
    )
}

export default Comments;