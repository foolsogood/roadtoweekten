import { useQuery } from "@apollo/client";
import recommendedProfilesQuery from "../queries/recommendedProfilesQuery.js";
import Profile from "../components/Profile.js";

export default function Home() {
  const { loading, error, data } = useQuery(recommendedProfilesQuery);
  console.log("==", data);
  if (loading) return "Loading..";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>

      <h1 style={{fontSize:'30px'}}>alchemy lens show</h1>
      <h3>author: foolsogood</h3>
      </div>

      <div>
      {data ? (
        data.recommendedProfiles.map((profile, index) => {
          console.log(`Profile ${index}:`, profile);
          return (
            <Profile
              key={profile.id}
              profile={profile}
              displayFullProfile={false}
            />
          );
        })
      ) : (
        <div>no data</div>
      )}
      </div>
      
    </div>
  );
}
