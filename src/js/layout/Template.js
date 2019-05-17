import React from 'react'
import PropTypes from 'prop-types'

class Template extends React.Component {

    render() {

        const {children, navigation} = this.props;

        return (
            <div className={'page'}>
                <div className={'header'}>
                    My App Name
                </div>
                <div className={'navigation'}>
                    {navigation}
                </div>
                <div className={'content'}>
                    {children}
                </div>

                <div className={'footer'}>
                    Common Footer
                </div>

            </div>)

    }

}

Template.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default Template;
