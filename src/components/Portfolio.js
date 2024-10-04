import { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

export default class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedFilter: "All",
        }
    }

    handleSelectFilter = (filter) => {
        this.setState({selectedFilter: filter});
    }

    render(){
        const {selectedFilter} = this.state;
        const {filters, projects} = this.props;

        const filteredProjects = selectedFilter === "All" ? projects : projects.filter(project => project.category === selectedFilter);

        return(
            <div>
                <Toolbar filters={filters} selected={selectedFilter} onSelectFilter={this.handleSelectFilter}/>
                <ProjectList projects={filteredProjects}/>
            </div>
        );
    }
}