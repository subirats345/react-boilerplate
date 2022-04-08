import React from "react";

const InfoTable = (props) => {
  const [profiles, setProfiles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const getProfilesAsync = () => Promise.resolve(props.firebase.usersTest());

  React.useEffect(() => {
    setIsLoading(true);

    getProfilesAsync()
      .then((result) => {
        setProfiles(result);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full table-compact table-zebra">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <TableRow />
          ) : (
            profiles.map((profile) => (
              <TableRow key={profile.email} {...profile} />
            ))
          )}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const TableRow = ({ userName, img, color }) => {
  return (
    <tr className="hover">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://i.pravatar.cc/300"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{userName}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>{color}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default InfoTable;
