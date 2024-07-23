---
title: 'Hacking the Electoral College'
date: 2024-07-22
permalink: /posts/2024/07/electoral-college-hacking/
excerpt: A look into the electoral college system in the United States and modeling some interesting scenarios.
tags:
  - politics
---

Every 4 years we hear the same conversations about the electoral college and its inefficacy at representing the "will of the people". I don't intend to make any political statements in this post; however, I thought we would take a look at how far we can push the electoral college to truly skew the representation of votes.

The main gripe with the electoral college is the unequal weight given to constituents in each state. Per the [2020 U.S. Census data](https://www.census.gov/data/tables/2020/dec/2020-apportionment-data.html) the United States has a population of 331,797,979 with 538 electoral college votes distributed amonst the 50 states and the District of Columbia. This results in an average of 616724 residents per electoral college vote. There are outliers in this average however which is where the argument against the electoral college system arises. The state with the lowest population per EC vote, or the state with the highest representation is Wyoming with only 192573 residents represented per EC vote. The state with the highest population per EC vote, or the state with the lowest representation is California with 732903 residents represented per EC vote.

These results are not particularly surprising. The electoral college system is mandated to give each state and district a minimum of 3 votes, with the remainder being split by population. The largest states (CA, TX, NY and FL) have reduced electoral college votes to compensate for this. 

The second rule about the electoral college system that is particularly relevant is that it is a winner take all system. The candidate with the largest vote share in each state (even if it is less than 50%) will recieve all of the electoral college votes in each state.

Before we jump into the madness, here's a list of the populations, electoral college votes and the population represented by each vote by state sorted from the smallest population represented by each vote (highest EC share) to the largest population represented by each vote (lowest EC share). Note that Nebraska and Maine split their votes; however, these are a small amount of the total votes and therefore not shown for simplicity.

|STATE                |Population|Number of Electoral College Votes|Population / EC Votes|
|---------------------|----------|---------------------------------|---------------------|
|Wyoming              |577,719   |3                                |192573               |
|Vermont              |643,503   |3                                |214501               |
|Disctrict of Columbia|689,545   |3                                |229848               |
|Alaska               |736,081   |3                                |245360               |
|North Dakota         |779,702   |3                                |259901               |
|Montana              |1,085,407 |4                                |271352               |
|Rhode Island         |1,098,163 |4                                |274541               |
|South Dakota         |887,770   |3                                |295923               |
|Delaware             |990,837   |3                                |330279               |
|Maine                |1,363,582 |4                                |340896               |
|New Hampshire        |1,379,089 |4                                |344772               |
|Hawaii               |1,460,137 |4                                |365034               |
|Nebraska             |1,963,333 |5                                |392667               |
|New Mexico           |2,120,220 |5                                |424044               |
|West Virginia        |1,795,045 |4                                |448761               |
|Idaho                |1,841,377 |4                                |460344               |
|Kansas               |2,940,865 |6                                |490144               |
|Mississippi          |2,963,914 |6                                |493986               |
|Arkansas             |3,013,756 |6                                |502293               |
|Connecticut          |3,608,298 |7                                |515471               |
|Nevada               |3,108,462 |6                                |518077               |
|Oregon               |4,241,500 |8                                |530188               |
|Iowa                 |3,192,406 |6                                |532068               |
|Utah                 |3,275,252 |6                                |545875               |
|Alabama              |5,030,053 |9                                |558895               |
|Kentucky             |4,509,342 |8                                |563668               |
|Oklahoma             |3,963,516 |7                                |566217               |
|South Carolina       |5,124,712 |9                                |569412               |
|Minnesota            |5,709,752 |10                               |570975               |
|Colorado             |5,782,171 |10                               |578217               |
|Louisiana            |4,661,468 |8                                |582684               |
|Wisconsin            |5,897,473 |10                               |589747               |
|Missouri             |6,160,281 |10                               |616028               |
|Indiana              |6,790,280 |11                               |617298               |
|Maryland             |6,185,278 |10                               |618528               |
|Tennessee            |6,916,897 |11                               |628809               |
|Massachusetts        |7,033,469 |11                               |639406               |
|Washington           |7,715,946 |12                               |642996               |
|Arizona              |7,158,923 |11                               |650811               |
|North Carolina       |10,453,948|16                               |653372               |
|New Jersey           |9,294,493 |14                               |663892               |
|Virginia             |8,654,542 |13                               |665734               |
|Georgia              |10,725,274|16                               |670330               |
|Michigan             |10,084,442|15                               |672296               |
|Illinois             |12,822,739|19                               |674881               |
|Pennsylvania         |13,011,844|19                               |684834               |
|Ohio                 |11,808,848|17                               |694638               |
|Florida              |21,570,527|30                               |719018               |
|New York             |20,215,751|28                               |721991               |
|Texas                |29,183,290|40                               |729582               |
|California           |39,576,757|54                               |732903               |

Using what we know about how the electoral college works now, we can dream up a scenario in which a candidate wins only the states with the lowest population represented by EC vote in order to reach 270 electoral college votes. This candidate will need to accomplish the task of winning the 40 states with the lowest population represented; however, their electoral college votes will represent only 144,849,472 people or 43.7% of the total population. This may not seem that bad, but remember that we only need to win more votes than the other candidate that is running. By winning only 50.1% of these 40 states, they will represent the votes of 72,569,585 people or 21.9% of the total population of the country. As an additional mind bender, this election consists of 3 front runners. As stated before, the candidate only needs to have the most votes in the state, not necessarily >50%. In a case where there are three candidates, we can imagine a scenario in which our candidate only successfully wins 33.4% of the vote on their way to victory in each of these 40 states. This candidate would win the election with only 48,379,724 votes or 14.6% of the popular vote in the country.

|Scenario of victory|Popular Votes of winning candidate|Percentage of Country Represented|
|100% of the 40 highest represented states|144,849,472|43.7%|
|50.1% of the 40 highest represented states|72,569,585|21.9%|
|33.4% of the 40 highest represented states|48,379,724|14.6%|

Given that many Americans can not vote and even more who can vote do not, the 2020 election resulted in the winner having recieved 81,283,501 votes or 24.5% of the total population and the 2016 election resulted in the winner having recieved 62,984,828 or 19.0% of the total population of votes.

While this is a fun exercise, the biggest takeaway from this is to encourage you to vote. The wildest scenarios imaginable by hacking the electoral college process in which the winning candidate represents just a measly percentage of the total votes are right on par with the representation given in a normal election as most people either do not or cannot vote. Make your voice heard.