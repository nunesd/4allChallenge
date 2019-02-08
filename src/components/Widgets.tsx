import React, { Component } from 'react';

export const Widgets = (props: Props) => {

    const cardTemplate = (title: string, value: null | number | string, iconClassName?: string) => (
		<div className="col-xl-3 col-lg-6 col-xs-12 card">
			<span className="card-container">
				<span className={`card-icon ${title.toLowerCase().replace(' ', '-')}`}>
					<i className={iconClassName} />
				</span>
				<span className="card-data">
					<span className="card-data-value" style={{ opacity: value ? 1 : 0 }}>
						{value ? value : '000'}
					</span>
					<span className="card-data-title">{title}</span>
				</span>
			</span>
		</div>
	)

   return (
        <section className="Widgets">
            <div className="row">
                {cardTemplate('New Orders', props.widgets && props.widgets.newOrders, 'fas fa-shopping-bag')}
                {cardTemplate('Comments', props.widgets && props.widgets.comments, 'far fa-comment')}
                {cardTemplate('New Users', props.widgets && props.widgets.newUsers, 'far fa-user')}
                {cardTemplate(
                    'Page Views',
                    props.widgets && (props.widgets.pageViews / 1000).toFixed(1) + 'k',
                    'fas fa-chart-bar'
                )}
            </div>
        </section>
   )
}

export interface Props {
    widgets: {
		newOrders: number
		comments: number
		newUsers: number
		pageViews: number
	} | null
}