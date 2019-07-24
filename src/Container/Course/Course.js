import React, {Component} from 'react';
import {Query} from "react-apollo";
import gql from 'graphql-tag';
import AllData from './AllData';

class Courses extends Component {
    constructor() {
        super();
        this.state = {
            course: [],
        }
    }

    render() {
        const {course}=this.state;
        return (
            <div>
                <div style={{textAlign: 'center', marginTop: 10}} >
                    <h1>Courses</h1>
                </div>
                <hr/>
                <div style={{textAlign: 'center', marginTop: 10}} >
                <button type="button" className="btn btn-dark" onClick={this.addCourse}>ADD COURSE</button>
                </div>
                <hr/>
                <Query query={gql`
            query course{
             allCourses
             {
               title
               author
               topic
                url
             }
            }
        `}>
                    {
                        (({loading, err, data}) => {
                            if (loading) return <p>Loading...</p>;
                            if (err) return <p>Error...</p>;
                            console.log(data);
                            return (
                                <AllData
                                    data={data.allCourses}
                                />
                            )
                        })
                    }
                </Query>
            </div>
        );
    }
}

export default Courses;