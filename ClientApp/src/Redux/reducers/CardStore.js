import produce from 'immer';
import createReducer from "./reducerUtils";


const initialState = {
    load: false,
    publishStatus: 0,//0=add 1=update
    screenSize: 0,//mobile=0 desktop=1


    socialMediaIcons: {
        "Whatsapp": ['fab', 'whatsapp'], "Facebook": ['fab', 'facebook'],
        "Messenger": ['fab', 'facebook-messenger'], "Youtube": ['fab', 'youtube'],
        "Instagram": ['fab', 'instagram'], "Twitter": ['fab', 'twitter'], "Linkedin": ['fab', 'linkedin-in'],
        "Slack": ['fab', 'slack'], "Dribbble": ['fab', 'dribbble'], "Waze": ['fab', 'waze']
    },
    //fon nav button open and close
    collaps: {
        agentDetailsOpen: false,
        socialMediaOpen: false,
        vCardStyleOpen: false,
    },
    cards: [
        {
            cardId: 1,
            agentDetails: {
                fullName: "Atara Frieman",
                rule: "Loyer/Founder",
                mobile: "",
                personalEmail: "",
                aboutConnect: "",
                aboutTitle: "",
                personalMassegeTitle: "",
                personalMassegeConnect: "",
            },
            socialMedias: [
                { name: "Whatsapp", url: "0548498295" },
                { name: "Facebook", url: "" },
                { name: "Messenger", url: "" },
                { name: "Youtube", url: "" },
                { name: "Instagram", url: "" },
                { name: "Twitter", url: "" },
                { name: "Linkedin", url: "" },
                { name: "Slack", url: "" },
                { name: "Dribbble", url: "" },
                { name: "Waze", url: "" },
            ],
            vCardStyle: {
                coverImg: "",
                bodyColor: "#2B5FFF",
                bodyColorDesktop: "#fff",
                logoImg: "#15328A 0% 0% no-repeat padding-box",
                logoShape: "",
                profileImg: "#15328A 0% 0% no-repeat padding-box",
                profileImgShape: "",
                fullNametitleColor: "#fff",
                fullNametitleColorDesktop: "#0D214B",
                ruletitleColor: "#fff",
                ruletitleColorDesktop: "#0D214B",
                mobiletitleColor: "",
                mobiletitle: "Call Me",
                mobileIconColor: "",
                socialMediaIconColor: "#fff",
                socialMediaTitleIconColor: "#fff",
                socialMediaIconColorDesktop: "#0D214B",
                socialMediaTitleIconColorDesktop: "#0D214B",
                socialMediaIconShape: "50%",
                fullNameShow: false,
                ruleShow: false,
                mobileShow: false,
                profileShow: false,
                mobileIconShow: false,
                aboutShow: false,
                personalMassegeShow: false
            }
        },
    ],
    currentCard: {
        agentDetails: {
            fullName: "",
            rule: "",
            mobile: "",
            personalEmail: "",
            aboutConnect: "",
            aboutTitle: "",
            personalMassegeTitle: "",
            personalMassegeConnect: "",
        },
        socialMedias: [
            { name: "Whatsapp", url: "" },
            { name: "Facebook", url: "" },
            { name: "Messenger", url: "" },
            { name: "Youtube", url: "" },
            { name: "Instagram", url: "" },
            { name: "Twitter", url: "" },
            { name: "Linkedin", url: "" },
            { name: "Slack", url: "" },
            { name: "Dribbble", url: "" },
            { name: "Waze", url: "" },
        ],
        vCardStyle: {
            coverImg: "",
            bodyColor: "#2B5FFF",
            bodyColorDesktop: "#fff",
            logoImg: "#15328A 0% 0% no-repeat padding-box",
            logoShape: "",
            profileImg: "#15328A 0% 0% no-repeat padding-box",
            profileImgShape: "",
            fullNametitleColor: "#fff",
            fullNametitleColorDesktop: "#0D214B",
            ruletitleColor: "#fff",
            ruletitleColorDesktop: "#0D214B",
            mobiletitleColor: "",
            mobiletitle: "Call Me",
            mobileIconColor: "",
            socialMediaIconColor: "#fff",
            socialMediaTitleIconColor: "#fff",
            socialMediaIconColorDesktop: "#0D214B",
            socialMediaTitleIconColorDesktop: "#0D214B",
            socialMediaIconShape: "50%",
            fullNameShow: false,
            ruleShow: false,
            mobileShow: false,
            profileShow: false,
            mobileIconShow: false,
            aboutShow: false,
            personalMassegeShow: false
        }
    },

    //index of selection card
    currentIndexCard: -1,

    //for formdata to send imag to backend
    Images: {
        coverImg: "",
        logoImg: "",
        profileImg: ""
    }
};


const card = {
    setLoading(state, action) {
        state.load = !state.load;
    },
    //set all cards
    setCards(state, action) {
        state.cards = action.payload;
    },
    //set after select card
    setCurrentCard(state, action) {
        state.currentCard = state.cards[action.payload];
        state.currentIndexCard = action.payload;
        state.publishStatus = 1;
    },
    updateCurrentCard(state, action) {
        state.cards[state.currentIndexCard] = action.payload;
    },
    //set defulrt object
    setNewCurrentCard(state, action) {
        state.currentCard = action.payload;
        state.publishStatus = 0;
    },
    //add after changes
    addNewCurrentCard(state, action) {
        state.cards.push(action.payload);
    },
    setsocialMediaUrl(state, action) {
        state.currentCard.socialMedias[action.payload.index].url = action.payload.url;
    },
    setsocialIconCheaked(state, action) {
        state.currentCard.socialMedias[action.payload.index].url = "";
    },
    setCovercardStyle(state, action) {
        state.currentCard.vCardStyle.coverImg = action.payload;
    },
    setLogocardStyle(state, action) {
        state.currentCard.vCardStyle.logoImg = action.payload;
    },
    setProfilecardStyle(state, action) {
        state.currentCard.vCardStyle.profileImg = action.payload;
    },
    setFullnameShow(state, action) {
        state.currentCard.vCardStyle.fullNameShow = action.payload;
    },
    setRuleShow(state) {
        state.currentCard.vCardStyle.ruleShow = !state.currentCard.vCardStyle.ruleShow;
    },
    setTitleIconColor(state, action) {
        if (state.screenSize === 0)
            state.currentCard.vCardStyle.socialMediaTitleIconColor = action.payload;
        else
            state.currentCard.vCardStyle.socialMediaTitleIconColorDesktop = action.payload;
    },
    setIconColor(state, action) {
        if (state.screenSize === 0)
            state.currentCard.vCardStyle.socialMediaIconColor = action.payload;
        else
            state.currentCard.vCardStyle.socialMediaIconColorDesktop = action.payload;
    },
    setFullNameTitleColor(state, action) {
        if (state.screenSize === 0)
            state.currentCard.vCardStyle.fullNametitleColor = action.payload;
        else
            state.currentCard.vCardStyle.fullNametitleColorDesktop = action.payload;
    },
    setRuleColor(state, action) {
        if (state.screenSize === 0)
            state.currentCard.vCardStyle.ruletitleColor = action.payload;
        else
            state.currentCard.vCardStyle.ruletitleColorDesktop = action.payload;
    },
    setShapRadius(state) {
        state.currentCard.vCardStyle.socialMediaIconShape = "20%";
    },
    setShapSquared(state) {
        state.currentCard.vCardStyle.socialMediaIconShape = "0%";
    },

    setShapRound(state) {
        state.currentCard.vCardStyle.socialMediaIconShape = "50%"
    },
    setBodyColor(state, action) {
        if (state.screenSize === 0)
            state.currentCard.vCardStyle.bodyColor = action.payload;
        else
            state.currentCard.vCardStyle.bodyColorDesktop = action.payload;
    },
    setScreenSize(state, action) {
        state.screenSize = action.payload;
    },

    // change this -----------------------------------------------//open and close configurator button
    setAgentDetailsToggle(state, action) {
        if (action.payload === "card")
            state.collaps.agentDetailsOpen = true;
        else
            state.collaps.agentDetailsOpen = !state.collaps.agentDetailsOpen;
        state.collaps.socialMediaOpen = false;
        state.collaps.vCardStyleOpen = false
    },
    setSocialMediaToggle(state, action) {
        if (action.payload ==="card")
            state.collaps.socialMediaOpen = true;
        else
            state.collaps.socialMediaOpen = !state.collaps.socialMediaOpen;
        state.collaps.agentDetailsOpen = false;
        state.collaps.vCardStyleOpen = false
    },
    setvCardStyleToggle(state, action) {
        if (action.payload === "card")
            state.collaps.vCardStyleOpen = true;
        else
            state.collaps.vCardStyleOpen = !state.collaps.vCardStyleOpen;
        state.collaps.agentDetailsOpen = false;
        state.collaps.socialMediaOpen = false;
    },
    // ------------------------------------------------------------------
   
};

export default produce((state, action) => createReducer(state, action, card), initialState);