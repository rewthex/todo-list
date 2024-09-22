export default (() => {
	const tasks = {
		0: {
			title: 'Complete Project Documentation',
			description:
				'Finish the project documentation for the new software release.',
			dueDate: '09-20-2024',
			priority: 'green',
			category: 'Work',
		},
		1: {
			title: 'Prepare Team Meeting Agenda',
			description:
				'Create an agenda and gather materials for the upcoming team meeting.',
			dueDate: '09-18-2024',
			priority: 'yellow',
			category: 'Work',
		},
		2: {
			title: 'Submit Weekly Report',
			description:
				'Compile and submit the weekly progress report to management.',
			dueDate: '09-19-2024',
			priority: 'red',
			category: 'Work',
		},
		3: {
			title: 'Review Open Pull Requests',
			description:
				'Go through the pending pull requests and provide feedback or approvals.',
			dueDate: '09-21-2024',
			priority: 'green',
			category: 'Work',
		},
		4: {
			title: 'Update Personal Website Content',
			description:
				'Revise and add new content to the personal website, including blog posts.',
			dueDate: '09-23-2024',
			priority: 'yellow',
			category: 'Personal',
		},
		5: {
			title: 'Plan Marketing Strategy',
			description:
				'Develop a new marketing strategy for the upcoming product launch.',
			dueDate: '09-25-2024',
			priority: 'red',
			category: 'Work',
		},
		6: {
			title: 'Fix Dashboard Bugs',
			description:
				'Identify and fix bugs in the analytics dashboard for better performance.',
			dueDate: '09-22-2024',
			priority: 'green',
			category: 'Work',
		},
		7: {
			title: 'Conduct Code Review Session',
			description:
				'Host a code review session to improve code quality and catch issues.',
			dueDate: '09-24-2024',
			priority: 'yellow',
			category: 'Work',
		},
	};

	Object.keys(tasks).forEach((key) => {
		localStorage.setItem(key, JSON.stringify(tasks[key]));
	});
})();
