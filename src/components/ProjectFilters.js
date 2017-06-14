import React from 'react';
import ProjectFilterButton from './ProjectFilterButton';

const ProjectFilters = (props) => {
	const filters = [
		{'all': 'All'},
		{'node': 'Node.js'},
		{'meteor': 'Meteor.js'},
		{'react': 'React.js'},
		{'pwa': 'Progressive Web App (PWA)'},
		{'webrtc': 'WebRTC'},
		{'d3': 'D3.js'},
		{'svg': 'svg'},
		{'php': 'PHP'},
		{'lamp': 'PHP / MySQL'},
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
