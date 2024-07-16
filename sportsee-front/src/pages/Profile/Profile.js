import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../../services/api.js";
import {
  getMockUserData,
  getMockUserActivity,
  getMockUserAverageSessions,
  getMockUserPerformance,
} from "../../services/apiMock.js";
import BarChartComponent from "../../components/BarChart/BarChart.js";
import SideCard from "../../components/SideCard/SideCard.js";
import RadialBarChartScore from "../../components/RadialBarChart/RadialBarChart.js";
import PerformanceRadarChart from "../../components/RadarChart/RadarChart.js";
import LineChartComponent from "../../components/LineChart/LineChart.js";
import caloriesIcon from "../../assets/images/sidecard-icons/calories.svg";
import glucidesIcon from "../../assets/images/sidecard-icons/glucides.svg";
import lipidesIcon from "../../assets/images/sidecard-icons/lipides.svg";
import proteinesIcon from "../../assets/images/sidecard-icons/proteines.svg";
import "./profile.css";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserData(id);
        const activity = await getUserActivity(id);
        const sessions = await getUserAverageSessions(id);
        const performance = await getUserPerformance(id);

        setUserData(user);
        setUserActivity(activity);
        setUserAverageSessions(sessions);
        setUserPerformance(performance);
      } catch (error) {
        console.error(
          "Failed to fetch data from backend, using mock data",
          error
        );
        setError("Failed to fetch data from backend, using mock data");

        const user = await getMockUserData(id);
        const activity = await getMockUserActivity(id);
        const sessions = await getMockUserAverageSessions(id);
        const performance = await getMockUserPerformance(id);

        setUserData(user);
        setUserActivity(activity);
        setUserAverageSessions(sessions);
        setUserPerformance(performance);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Chargement du profil...</p>;
  if (!userData) return <p>Aucune donnée utilisateur disponible</p>;

  const { keyData, todayScore, score } = userData;
  const userScore = todayScore || score;
  const switchUserId = id === "12" ? "18" : "12";

  return (
    <section className="profile-container">
      <header className="header">
        <h1>
          Bonjour <span>{userData.userInfos.firstName}</span>
        </h1>
        <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
        <Link to={`/profile/${switchUserId}`}>
          <button className="switch-user-btn">Changer de profil</button>
        </Link>
      </header>
      <section className="main-content">
        <section className="bar-chart">
          {userActivity && userActivity.sessions && (
            <BarChartComponent data={userActivity.sessions} />
          )}
        </section>
        <section className="line-chart">
          {userAverageSessions && userAverageSessions.sessions && (
            <LineChartComponent data={userAverageSessions.sessions} />
          )}
        </section>
        <section className="radar-chart">
          {userPerformance && userPerformance.data && userPerformance.kind && (
            <PerformanceRadarChart
              performanceData={userPerformance.data}
              kind={userPerformance.kind}
            />
          )}
        </section>
        <section className="radial-bar-chart">
          {userScore !== undefined && <RadialBarChartScore score={userScore} />}
        </section>
        <section className="sidecard">
          {keyData && (
            <>
              <SideCard
                icon={caloriesIcon}
                value={`${keyData.calorieCount}kCal`}
                label="Calories"
                bgColor="#FFEBE5"
              />
              <SideCard
                icon={proteinesIcon}
                value={`${keyData.proteinCount}g`}
                label="Protéines"
                bgColor="#E5F1FF"
              />
              <SideCard
                icon={glucidesIcon}
                value={`${keyData.carbohydrateCount}g`}
                label="Glucides"
                bgColor="#FFF5DB"
              />
              <SideCard
                icon={lipidesIcon}
                value={`${keyData.lipidCount}g`}
                label="Lipides"
                bgColor="#FFE5E5"
              />
            </>
          )}
        </section>
      </section>
    </section>
  );
};

export default Profile;
