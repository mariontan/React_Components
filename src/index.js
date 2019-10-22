import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';//./ look mean look in the same folder we are in 
import ApprovalCard from './ApprovalCard'

const App =() =>{
	return( 
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4> Warning!</h4>
					Sure?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Sam" timeAgo="Today at 4:5OM" text="Hi" img={faker.image.avatar()}/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Alex" timeAgo="Today at 4:51M" text="World" img={faker.image.avatar()}/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Jane" timeAgo="Today at 4:52M"text="Heloo" img={faker.image.avatar()}/>
			</ApprovalCard>
		</div>
	);
};
ReactDOM.render(<App/>,document.querySelector('#root'))