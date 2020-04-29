const oneMonth = {type: 'oneMonth', name: 'One Month', subText: 'Ipsum'};
const ninetyDays = {type: 'ninetyDays', name: '90 days', subText: 'Ipsum'};
const beta = {type: 'beta', name: 'Beta', subText: 'Ipsum'};
const emmeversary = {type: 'emmeversary', name: 'EMMEversary', subText: 'Ipsum'};
const farFromHome = {type: 'farFromHome', name: 'Far From Home', subText: 'Ipsum'};
const getPills = {type: 'getPills', name: 'Get Pills', subText: 'Ipsum'};
const newPhase = {type: 'newPhase', name: 'New Phase', subText: 'Ipsum'};
const perfectPack1 = {type: 'perfectPack1', name: 'Perfect Pack', subText: 'No.1'};
const perfectPack2 = {type: 'perfectPack2', name: 'Perfect Pack', subText: 'No.2'};
const perfectPack3 = {type: 'perfectPack3', name: 'Perfect Pack', subText: 'No.3'};
const perfectPack4 = {type: 'perfectPack4', name: 'Perfect Pack', subText: 'No.4'};
const perfectWeek1 = {type: 'perfectPack1', name: 'Perfect Week', subText: 'No.1'};
const perfectWeek2 = {type: 'perfectPack2', name: 'Perfect Week', subText: 'No.2'};
const perfectWeek3 = {type: 'perfectPack3', name: 'Perfect Week', subText: 'No.3'};
const perfectWeek4 = {type: 'perfectPack4', name: 'Perfect Week', subText: 'No.4'};
const perfectWeek5 = {type: 'perfectPack5', name: 'Perfect Week', subText: 'No.5'};
const pillQueen1 = {type: 'pillQueen1', name: 'Pill Queen', subText: 'No.1'};
const pillQueen2 = {type: 'pillQueen2', name: 'Pill Queen', subText: 'No.2'};
const pillQueen3 = {type: 'pillQueen3', name: 'Pill Queen', subText: 'No.3'};
const pillQueen4 = {type: 'pillQueen4', name: 'Pill Queen', subText: 'No.4'};
const pillQueen5 = {type: 'pillQueen5', name: 'Pill Queen', subText: 'No.5'};
const pillQueen6 = {type: 'pillQueen6', name: 'Pill Queen', subText: 'No.6'};
const pillQueen7 = {type: 'pillQueen7', name: 'Pill Queen', subText: 'No.7'};
const pillStreak = {type: 'pillStreak', name: 'Pill Streak', subText: 'Ipsum'};
const syncedUp = {type: 'syncedUp', name: 'Synced Up', subText: 'Ipsum'};
const timeJump = {type: 'timeJump', name: 'Time Jump', subText: 'Ipsum'};
const totalNomad = {type: 'totalNomad', name: 'Total Nomad', subText: 'Ipsum'};
const trackingVitals1 = {type: 'trackingVitals1', name: 'Tracking Vitals', subText: 'No 1'};
const trackingVitals2 = {type: 'trackingVitals2', name: 'Tracking Vitals', subText: 'No 2'};
const trackingVitals3 = {type: 'trackingVitals3', name: 'Tracking Vitals', subText: 'No 3'};
const trackingVitals4 = {type: 'trackingVitals4', name: 'Tracking Vitals', subText: 'No 4'};

export default {
  commitment: {
    currentStreakDays: 12,
    longestStreak: 25,
    totalBadges: 5,
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    recent: [
      perfectPack2,
      perfectWeek3,
    ],
    inProgress: [
      {
        badge: perfectPack3,
        current: 7,
        total: 20
      },
      {
        badge: perfectWeek4,
        current: 4,
        total: 7
      },
    ],
    previous: [
      perfectPack1,
      perfectWeek1,
      perfectWeek2,
      timeJump,
    ]
  },
  awareness: {
    currentStreakDays: 5,
    longestStreak: 14,
    totalBadges: 1,
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    inProgress: [
      {
        badge: trackingVitals2,
        current: 8,
        total: 29
      },
    ],
    previous: [
      farFromHome,
    ]
  },
  connection: {
    currentStreakDays: 2,
    longestStreak: 7,
    totalBadges: 2,
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    recent: [
      syncedUp,
    ],
    previous: [
      beta,
    ]
  },
  exploration: {
    currentStreakDays: 20,
    longestStreak: 20,
    totalBadges: 3,
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    recent: [
      getPills,
    ],
    previous: [
      oneMonth,
      ninetyDays
    ]
  },
}