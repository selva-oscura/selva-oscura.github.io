import React from 'react';
import ProjectFilterButton from './ProjectFilterButton';

const ProjectFilters = (props) => {
	const filters = [
		{'all': 'All'},
		{'meteor': 'Meteor.js'},
		{'node': 'Node.js'},
		{'php': 'PHP'},
		{'lamp': 'PHP / MySQL'},
		{'pwa': 'Progressive Web App (PWA)'},
		{'react': 'React.js'},
		{'webrtc': 'WebRTC'},
	]
	return (
		<div className='project-filters'>
			{ filters.map((filter, i)=>(
				<ProjectFilterButton 
					key={i} 
					filter={filter} 
					setProjectFilters={props.setProjectFilters}
					projectFilters={props.projectFilters}
				/>
				)) 
			}
		</div>
	)
}

export default ProjectFilters;
