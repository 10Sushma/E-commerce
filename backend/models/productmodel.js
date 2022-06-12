const mongoose = require('mongoose')
const schema = mongoose.Schema

const ProductSchema = new schema ({
    category: { type: String },
    title: { type: String },
    price : { type: String },  
    image:{ type: String  },   
 })

const productdb = mongoose.model('product' , ProductSchema);
module.exports = productdb;


// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"300",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"900",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"800",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"200",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17873954/2022/4/13/cb2d6eb9-bd56-4698-aaa3-7faf956bbb591649841744638SitaramDesignerWomenBlackEthnicMotifsEmbellishedMirrorWorkKu1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"700",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17873954/2022/4/13/cb2d6eb9-bd56-4698-aaa3-7faf956bbb591649841744638SitaramDesignerWomenBlackEthnicMotifsEmbellishedMirrorWorkKu1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"550",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10297647/2021/1/21/8548a7ff-1c4e-476d-9cf3-5496bc5e3c8f1611224460739-Anouk-Navy-Blue-Striped-Rayon-Straight-Kurta-With-Pompom-Lac-1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women saree",
//     "price":"2000",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17873956/2022/4/13/03587bb2-330f-41c5-ad30-c294c2a645041649842108608SitaramDesignerWomenBlackCold-ShoulderSleevesThreadWorkKurta1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women saree",
//     "price":"900",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14046594/2022/6/9/5fba9594-3301-4881-ba56-d56a44570e831654747998773LibasWomenNavyBluePureCottonFloralPrintKurtawithPalazzosDupa1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women saree",
//     "price":"1000",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"300",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17873948/2022/4/13/3bffa7bb-5124-43ba-9338-0607cd7bf27a1649841817839SitaramDesignerWomenGreyThreadWorkAnarkaliKurta1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"300",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"300",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15258048/2021/9/6/a5a4b340-d0b2-44c2-bf0d-7d4733a6413f1630920975833-Libas-Women-Kurta-Sets-1441630920974980-1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"300",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"300",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17873944/2022/4/13/c26d8da0-ef5e-4101-b07a-68fe76bfa2131649841632377SitaramDesignerWomenBurgundyThreadWorkAnarkaliKurta1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"300",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17231904/2022/2/21/4139cbb2-1fb4-4bf9-aa07-01aa3b0e8ef71645432199705SochWomenPinkColourblockedFlaredSleevesPathaniKurta1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"300",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"300",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17982110/2022/5/11/067ff869-80e5-4486-8687-5d8b7e48950e1652268118448-Rain--Rainbow-Women-Kurta-Sets-11652268117747-1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"3000",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17481682/2022/3/11/765779d1-d77a-498a-afce-424fac0e46d51646986351697SochWomenYellowStripedFlaredSleevesChikankariAnarkaliKurta1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"300",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg"                
// },
// {
//     "category":"women's clothing",
//     "title":"women kurta",
//     "price":"600",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg"                
// },
// {
//     "category":"kid's clothing",
//     "title":"kid shirt",
//     "price":"400",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17861444/2022/4/12/744a809b-5460-4f61-afa2-dc718651b7831649756938187UnitedColorsofBenettonBoysBlueColourblockedCasualShirt1.jpg"
                
// },
// {
//     "category":"kid's clothing",
//     "title":"kid kurta",
//     "price":"600",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15300410/2021/8/30/9856cdff-9b4f-4d8e-bf9a-94696c1265781630312945153USPoloAssnBoysYellowOpaquePrintedCasualShirt1.jpg"                
// },
// {
//     "category":"kid's clothing",
//     "title":"kid shirt",
//     "price":"500",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17288464/2022/2/25/8b03e839-a098-4097-80ea-3b344106f4d91645776120683CutiekinsBlackFloralOff-ShoulderCrepeMidiDress1.jpg"
                
// },
// {
//     "category":"kids's clothing",
//     "title":"cotten dress",
//     "price":"600",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17045988/2022/2/4/0d9dcffa-936e-4129-a098-e184862a1e9d1643958755775pspeachesMagentaFloralA-LineDress1.jpg"                
// },
// {
//     "category":"kids's clothing",
//     "title":"kids shirt",
//     "price":"400",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17775244/2022/4/6/efb7e9b0-470b-4bb5-99a7-8186f4a122ea1649224516381pspeachesYellowFloralMidiDress1.jpg"
                
// },
// {
//     "category":"kid's clothing",
//     "title":"kid dress",
//     "price":"600",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17078866/2022/2/7/74b94d71-14c7-4d42-aecd-ae879651f10f1644254832982ATUNBurgundyNetDress1.jpg"                
// },
// {
//     "category":"kid's clothing",
//     "title":"kid shirt",
//     "price":"400",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17299840/2022/2/25/5b113a40-91fd-46e0-874e-5148e4e35f421645801920924StyloBugBlueFloralLayeredEmpireDress6.jpg"
                
// },
// {
//     "category":"kid's clothing",
//     "title":"kid kurta",
//     "price":"800",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16117272/2022/1/27/670592ef-2fd6-4adc-a8a7-e18dd927d3fc1643298647704CherryCrumblePeach-ColouredEmbellishedNetDress1.jpg"                
// },
// {
//     "category":"kid's clothing",
//     "title":"kid shirt",
//     "price":"900",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11301054/2021/3/4/ecefce3e-bff7-462f-997f-ff40f05880131614849485888-HM-Boys-5-Pack-Sustainable-Bodysuits-9081614849485194-1.jpg"
                
// },
// {
//     "category":"kid's clothing",
//     "title":"formal kurta",
//     "price":"600",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11892514/2021/3/4/616ef9cd-1743-49e6-842a-e653a846082f1614842465830-HM-Unisex-5-pack-Wrapover-Sustainable-Bodysuits-965161484246-1.jpg"                
// },
// {
//     "category":"kid's clothing",
//     "title":"kid shirt",
//     "price":"400",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18044336/2022/5/13/6f20ed5c-4a54-4efa-97f1-b2849de668621652443211168HELLCATBoysMaroonShorts1.jpg"
                
// },
// {
//     "category":"kid's clothing",
//     "title":"casual shirt",
//     "price":"1000",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17810272/2022/4/8/7b1b2262-8df4-4cf1-aad3-fd18823b867416493965318893-packjerseyshorts1.jpg"                
// },
// {
//     "category":"men's clothing",
//     "title":"formal shirt",
//     "price":"400",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17205140/2022/3/8/a56a9258-ea6b-448c-80f8-e4f6028873881646719405674-Raymond-Men-Shirts-5791646719405113-1.jpg"
                
// },
// {
//     "category":"men's clothing",
//     "title":"formal kurta",
//     "price":"600",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1271542/2018/2/9/11518152207925-INVICTUS-White-Slim-Fit-Formal-Shirt-9941518152207614-1.jpg"                
// },
// {
//     "category":"men's clothing",
//     "title":"casual shirt",
//     "price":"800",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/14/11adb5a6-9666-4bd2-8ed8-03fd20291f9d1581635929903-1.jpg"
                
// },
// {
//     "category":"men's clothing",
//     "title":"T shirt",
//     "price":"500",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11812204/2020/4/27/199007af-0b00-4007-9c0f-c33177f8f3d31587965442762Hangup1.jpg"                
// },


// {
//     "category":"men's clothing",
//     "title":"formal shirt",
//     "price":"400",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17609422/2022/3/31/63cbc210-f3a9-4cc0-8b9d-c5a347bcac561648722065324-Louis-Philippe-Men-Blazers-1091648722064640-1.jpg"
                
// },
// {
//     "category":"men's clothing",
//     "title":"formal kurta",
//     "price":"600",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17478176/2022/3/24/f1553ff8-e531-48c2-8884-f28b9d9847171648116118409-House-of-Pataudi-Men-Blazers-9891648116117703-1.jpg"                
// },
// {
//     "category":"men's clothing",
//     "title":"casual shirt",
//     "price":"800",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/8/17abc018-c75d-451a-9128-a149c3f48c861615215909807-1.jpg"
                
// },
// {
//     "category":"men's clothing",
//     "title":"T shirt",
//     "price":"500",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg"                
// },
// {
//     "category":"men's clothing",
//     "title":"formal shirt",
//     "price":"400",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/17/6746174f-f687-4fc8-ad6c-3b5781a6ae811613546748709-1.jpg"
                
// },
// {
//     "category":"men's clothing",
//     "title":"formal kurta",
//     "price":"600",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1265389/2018/2/7/11517995810352-Highlander-Black-Slim-Fit-Casual-Shirt-1061517995810069-1.jpg"                
// },
// {
//     "category":"men's clothing",
//     "title":"casual shirt",
//     "price":"800",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg"
                
// },
// {
//     "category":"men's clothing",
//     "title":"T shirt",
//     "price":"500",
//     "image":"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8889611/2019/3/20/3eae8fb4-b7ca-4e01-80bf-d1e59ab1568d1553080254589-Roadster-Men-Black--White-Regular-Fit-Checked-Casual-Shirt-9-1.jpg"                
// }






