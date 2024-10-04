import styles from './projects.module.css'

const ProjectList = ({projects}) => {
    return(
        <div className={styles.image_con}>
            {projects.map((projects,index) => (
                <img key = {index} src={projects.img} alt={projects.category} className={styles.sizeImage}/>
            ))}
        </div>
    )
}
export default ProjectList;