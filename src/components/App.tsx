import React from 'react';

import '../styles/index.css';
import { ReviewerProfile } from './UserProfile';
import { Reviewer2 } from '../fixtures/reviewers';
import { dogsCampaign, designCampaign } from '../fixtures/campaigns';
import { Campaign } from './campaign/Campaign';

export interface IAppProps {}

export interface IAppState {
	readonly Vehicle: IVehicle;
}

class App extends React.PureComponent<IAppProps, IAppState> {
	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<ReviewerProfile reviewer={Reviewer2} />
				<Campaign campaign={designCampaign}/>
			</div>
		);
	}
}

export default App;

