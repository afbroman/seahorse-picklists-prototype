import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class FilterForm extends Component {
  render() {
    return (
      <div id="filter-form" className="card">
        <form id="filterrific_filter" className="new_filterrific" action=
        "#" accept-charset="UTF-8" method="get" name=
        "filterrific_filter">
          <input name="utf8" type="hidden" value="✓" />
          <div className="row">
            <div className="col-md-6">
              <div data-react-class="SampleCount" data-react-props=
              "{&quot;source&quot;:&quot;/samples.json&quot;}"></div>
            </div>
            <div className="col-md-3 col-md-offset-9">
              <Button className=
              "btn btn-default btn-md pull-right vertical-button"
                 href=
                 "/visits/filter?filterrific%5Breset_filterrific%5D=true">
                Reset filters</Button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label>Search ADRC ID</label> <input className=
              "filterrific-periodically-observed form-control" type=
              "text" name="filterrific[search_query]" id=
              "filterrific_search_query" />
            </div>
            <div className="col-md-3">
              <label>Sorted by</label> <select className="form-control"
                                               name="filterrific[sorted_by]" id=
                                               "filterrific_sorted_by">
                <option value="adrc_id_asc">
                ADRC ID (ascending)
                </option>
                <option value="adrc_id_desc">
                ADRC ID (descending)
                </option>
                <option value="visit_type_asc">
                Visit type
                </option>
                <option value="created_at_desc">
                Creation date (newest first)
                </option>
                <option value="created_at_asc">
                Creation date (oldest first)
                </option>
              </select>
            </div>
            <div className="col-md-3">
              <label>Sample Type</label> <select className="form-control"
                                                 name="filterrific[with_sample_type]" id=
                                                 "filterrific_with_sample_type">
                <option value="">
                - Any -
                </option>
                <option value="serum">
                serum
                </option>
                <option value="plasma">
                plasma
                </option>
                <option value="whole_blood">
                whole_blood
                </option>
                <option value="csf">
                csf
                </option>
                <option value="dna">
                dna
                </option>
              </select>
            </div>
            <div className="col-md-3">
              <label>Sample Status</label> <select className=
              "form-control" name="filterrific[with_sample_status]"
                             id="filterrific_with_sample_status">
                <option value="">
                - Any -
                </option>
                <option value="available">
                available
                </option>
                <option value="sent">
                sent
                </option>
                <option value="reserved">
                reserved
                </option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label>Multiple ADRC IDs</label> 
              <textarea className=
              "filterrific-periodically-observed form-control" name=
              "filterrific[multiple_id_query]" id=
              "filterrific_multiple_id_query">
              </textarea>
            </div>
            <div className="col-md-3">
              <label>Race</label> <select className="form-control" name=
              "filterrific[with_race]" id="filterrific_with_race">
                <option value="">
                - Any -
                </option>
                <option value="white">
                white
                </option>
                <option value="black_or_african_american">
                black_or_african_american
                </option>
                <option value="american_indian_or_alaska_native">
                american_indian_or_alaska_native
                </option>
                <option value=
                "native_hawaiian_or_other_pacific_islander">
                native_hawaiian_or_other_pacific_islander
                </option>
                <option value="asian">
                asian
                </option>
                <option value="other">
                other
                </option>
                <option value="unknown">
                unknown
                </option>
              </select>
            </div>
            <div className="col-md-3">
              <label>DOS after</label>
              <div className="input-group">
                <input className=
                "filterrific-periodically-observed form-control datepicker"
                   type="text" name="filterrific[with_dos_gte]" id=
                   "filterrific_with_dos_gte" />
              </div>
            </div>
            <div className="col-md-3">
              <label>DOS before</label>
              <div className="input-group">
                <input className=
                "filterrific-periodically-observed form-control datepicker"
                   type="text" name="filterrific[with_dos_lte]" id=
                   "filterrific_with_dos_lte" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label>Cohort</label> <select className="form-control"
                                            name="filterrific[with_cohort]" id=
                                            "filterrific_with_cohort">
                <option value="">
                - Any -
                </option>
                <option value="control">
                control
                </option>
                <option value="mci">
                mci
                </option>
                <option value="ad">
                ad
                </option>
                <option value="other_dx">
                other_dx
                </option>
                <option value="impact">
                impact
                </option>
              </select>
            </div>
            <div className="col-md-3">
              <label>Gender</label> <select className="form-control"
                                            name="filterrific[with_gender]" id=
                                            "filterrific_with_gender">
                <option value="">
                - Any -
                </option>
                <option value="female">
                female
                </option>
                <option value="male">
                male
                </option>
              </select>
            </div>
            <div className="col-md-3">
              <label>Age above</label>
              <div className="input-group">
                <input className=
                "filterrific-periodically-observed form-control"
                   type="text" name="filterrific[with_age_gte]" id=
                   "filterrific_with_age_gte" />
              </div>
            </div>
            <div className="col-md-3">
              <label>Age below</label>
              <div className="input-group">
                <input className=
                "filterrific-periodically-observed form-control"
                   type="text" name="filterrific[with_age_lte]" id=
                   "filterrific_with_age_lte" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label>Visit Type</label> <select className="form-control"
                                                name="filterrific[with_visit_type]" id=
                                                "filterrific_with_visit_type">
                <option value="">
                - Any -
                </option>
                <option value="baseline">
                baseline
                </option>
                <option value="annual1">
                annual1
                </option>
                <option value="annual2">
                annual2
                </option>
                <option value="annual3">
                annual3
                </option>
                <option value="annual4">
                annual4
                </option>
                <option value="annual5">
                annual5
                </option>
                <option value="annual6">
                annual6
                </option>
                <option value="annual7">
                annual7
                </option>
                <option value="annual8">
                annual8
                </option>
                <option value="annual9">
                annual9
                </option>
                <option value="annual10">
                annual10
                </option>
                <option value="csfv1">
                csfv1
                </option>
                <option value="csfv2">
                csfv2
                </option>
                <option value="phone">
                phone
                </option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <label>Show only completed</label> <input className=
              "filterrific-periodically-observed pull-right" type=
              "checkbox" value="completed" checked="checked" name=
              "filterrific[with_visit_status]" id=
              "filterrific_with_visit_status" />
            </div>
            <div className="col-md-2">
              <label>Include distributed</label> <input name=
              "filterrific[with_distributed]" type="hidden" value=
              "undistributed" /> <input className=
              "filterrific-periodically-observed pull-right" type=
              "checkbox" value="distributed" name=
              "filterrific[with_distributed]" id=
              "filterrific_with_distributed" />
            </div>
          </div>
          <Button className="btn btn-default" id="export_filter">Export</Button>
        </form>
      </div>
    );
  }
}

export default FilterForm;
