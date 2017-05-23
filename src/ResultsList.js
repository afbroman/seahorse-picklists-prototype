import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ResultsList extends Component {
  render() {
    return (
      <div id="results-list" className="card">
        <div className="well well-small">
          <div className="row">
            <div className="col-md-12">
              Displaying visits <b>1&nbsp;-&nbsp;10</b> of <b>1173</b> in total
            </div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ADRC ID</th>
              <th>Visit Type</th>
              <th>DOS</th>
              <th>Cohort</th>
              <th>Ethnicity</th>
              <th>Number of Samples</th>
              <th>Visit Status</th>
              <th>Sample Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="entry">
              <td>
                <a href="#">00001</a>
              </td>
              <td>
                <a href="#">baseline</a>
              </td>
              <td>03/02/2010</td>
              <td>impact</td>
              <td>no</td>
              <td>11</td>
              <td>completed</td>
              <td>
                <a className="btn btn-default" href=
                  "#">Notes</a>
              </td>
            </tr>
            <tr className="entry">
              <td>
                <a href="#">00002</a>
              </td>
              <td>
                <a href="#">baseline</a>
              </td>
              <td>06/17/2010</td>
              <td>impact</td>
              <td>no</td>
              <td>11</td>
              <td>completed</td>
              <td>
                <a className="btn btn-default" href=
                  "#">Notes</a>
              </td>
            </tr>
            <tr className="entry">
              <td>
                <a href="#">00003</a>
              </td>
              <td>
                <a href="#">annual4</a>
              </td>
              <td>08/04/2014</td>
              <td>ad</td>
              <td>no</td>
              <td>12</td>
              <td>completed</td>
              <td>
                <a className="btn btn-default" href=
                  "#">Notes</a>
              </td>
            </tr>
            <tr className="entry">
              <td>
                <a href="#">00004</a>
              </td>
              <td>
                <a href="#">annual4</a>
              </td>
              <td>09/03/2014</td>
              <td>impact</td>
              <td>no</td>
              <td>12</td>
              <td>completed</td>
              <td>
                <a className="btn btn-default" href=
                  "#">Notes</a>
              </td>
            </tr>
            <tr className="entry">
              <td>
                <a href="#">00005</a>
              </td>
              <td>
                <a href="#">annual4</a>
              </td>
              <td>09/02/2014</td>
              <td>ad</td>
              <td>no</td>
              <td>12</td>
              <td>completed</td>
              <td>
                <a className="btn btn-default" href=
                  "#">Notes</a>
              </td>
            </tr>
            <tr className="entry">
              <td>
                <a href="#">00006</a>
              </td>
              <td>
                <a href="#">annual4</a>
              </td>
              <td>02/23/2015</td>
              <td>control</td>
              <td>no</td>
              <td>12</td>
              <td>completed</td>
              <td>
                <a className="btn btn-default" href=
                  "#">Notes</a>
              </td>
            </tr>
            <tr className="entry">
              <td>
                <a href="#">00007</a>
              </td>
              <td>
                <a href="#">annual4</a>
              </td>
              <td>11/25/2014</td>
              <td>mci</td>
              <td>no</td>
              <td>12</td>
              <td>completed</td>
              <td>
                <a className="btn btn-default" href=
                  "#">Notes</a>
              </td>
            </tr>
            <tr className="entry">
              <td>
                <a href="#">00008</a>
              </td>
              <td>
                <a href="#">annual4</a>
              </td>
              <td>05/04/2015</td>
              <td>impact</td>
              <td>no</td>
              <td>12</td>
              <td>completed</td>
              <td>
                <a className="btn btn-default" href=
                  "#">Notes</a>
              </td>
            </tr>
            <tr className="entry">
              <td>
                <a href="#">00009</a>
              </td>
              <td>
                <a href="#">annual4</a>
              </td>
              <td>12/22/2014</td>
              <td>impact</td>
              <td>no</td>
              <td>12</td>
              <td>completed</td>
              <td>
                <a className="btn btn-default" href=
                  "#">Notes</a>
              </td>
            </tr>
            <tr className="entry">
              <td>
                <a href="#">00010</a>
              </td>
              <td>
                <a href="#">annual4</a>
              </td>
              <td>12/18/2014</td>
              <td>ad</td>
              <td>no</td>
              <td>12</td>
              <td>completed</td>
              <td>
                <Button className="btn btn-default" href=
                  "#">Notes</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ResultsList;
