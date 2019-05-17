import React from 'react';
import PropTypes from 'prop-types';


class Section extends React.Component {

    static colors = [
        {color: "white", backgroundColor: "red"},
        {color: "white", backgroundColor: "darkgray"},
        {color: "black", backgroundColor: "silver"},
    ];

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const {section} = this.props;
        // this.setState(section);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (prevState !== this.state)
        //     this.props.onChange(null, this.state);
    }

    onSubsectionChange(subIndex, subState) {
        console.info("substate changed index:" + subIndex, subState);

    }

    addRandomArticle() {
        this.setState({articles: [...this.state.articles, Math.random()]});
    }

    handleAddClick = () => {
        const {section, onChange, id} = this.props;
        const updatedSection = {...section, articles: [...section.articles, Math.random()]};
        onChange(updatedSection, id)
    };

    handleChange = (updated, idx) => {
        const {section, onChange, id} = this.props;
        const updatedSection = {...section};
        updatedSection.subSections[idx] = updated;
        onChange(updatedSection, id);
    };

    render() {
        const level = this.props.level ? this.props.level : 0;
        // const {subSections} = this.props.section;
        // const {name, articles} = this.state;
        const {section: {name, articles, subSections}} = this.props;
        return (
            <div>
                <span>
                    <h5 style={Section.colors[level]}>
                        {name}
                    </h5>
                    <a className={"btn btn-link btn-sm"} onClick={this.handleAddClick}>Add random</a>
              </span>
                <ul>
                    {articles && articles.map((a, aIdx) => <li key={aIdx}>{a}</li>)}
                </ul>
                {subSections && subSections.map((ss, ssIdx) => (
                    <div key={ssIdx}>
                        <Section section={ss} level={level + 1} id={ssIdx} onChange={this.handleChange}/>
                    </div>
                ))

                }

            </div>
        )
    }
}

Section.propTypes = {
    section: PropTypes.object,
    level: PropTypes.number,
    onChange: PropTypes.func
};


class RecursiveContainer extends React.Component {

    static sections = [
        {
            name: "Sekcija 1",
            articles: [1, 2],
            subSections: [
                {
                    name: "SubSection 1",
                    articles: [13, 14],
                    subSections: []
                },
                {
                    name: "SubSection 2",
                    articles: [5],
                    subSections: [
                        {
                            name: "SubSubSection 21",
                            articles: [21, 22],
                            subSections: []
                        }
                    ]
                },
                {
                    name: "SubSection 3",
                    articles: [4, 5, 6, 7, 8],
                    subSections: []
                }
            ]
        },
        {
            name: "Sekcija 2",
            articles: [1, 2, 3],
            subSections: []
        }
    ];

    constructor(props) {
        super(props);
        this.state = {sections: RecursiveContainer.sections};
    }

    onSectionChanged = (updated, idx) => {
        const {sections} = this.state;
        console.info(sections, updated);
        const updatedSections = {...sections};
        updatedSections[idx] = updated;
        this.setState({sections: updatedSections});
    };

    render() {

        const {sections} = this.state;
        console.log("render :::: ", sections);

        return (
            <div>
                <h3>Recursive container</h3>
                {sections && sections.map((section, sectionIndex) => (
                    <Section key={sectionIndex} section={section} id={sectionIndex} onChange={this.onSectionChanged}/>
                ))}
            </div>
        )
    }
}

const data = {};


export default RecursiveContainer;
