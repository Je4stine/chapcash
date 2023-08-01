import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Privacy = () => {
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:"#fff", padding:20, alignItems:'center'}}>
      <ScrollView>
      <View>
          <Text  style={{ fontFamily:'Montserrat-bold', fontSize:25}}>Data protection policy</Text>
          <Text  style={{ fontFamily:'Montserrat-bold', fontSize:16, marginTop:10}}>Policy brief & purpose</Text>
          <Text  style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:20}}>Our  Data Protection Policy refers to our commitment to treat information of clients, stakeholders and other interested parties with the utmost care and confidentiality. With this policy, we ensure that we gather, store and handle data fairly, transparently and with respect towards individual rights.</Text>
          <Text  style={{ fontFamily:'Montserrat-bold', fontSize:16, marginTop:10}}>Scope</Text>
          <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:20}}>This policy refers to all parties (admins, customers, other interested parties.) who provide any amount of information to us.</Text>
          <Text style={{ fontFamily:'Montserrat-bold', fontSize:16, marginTop:20}}>Who is covered under the Data Protection Policy?</Text>
          <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:20}}>Employees of our company and its subsidiaries must follow this policy. Contractors, consultants, partners and any other external entity are also covered. Generally, our policy refers to anyone we collaborate with or acts on our behalf and may need occasional access to data from our system from time to time.</Text>
          <Text style={{ fontFamily:'Montserrat-bold', fontSize:16, marginTop:20}}>Policy elements</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:20}}>As part of our operations, we need to obtain and process information from time to time. This information includes data sent to us from the Safaricom database e.g The Names, Cellphone number and financial information, also other data that the system users provide to us such as Images to act as profile pictures, names and Cellphone numbers
          Our company collects this information in a transparent way and only with the full cooperation and knowledge of interested parties. Once this information is available to us, the following rules apply.</Text>
        <Text style={{ fontFamily:'Montserrat-bold', fontSize:15, marginTop:20}}>Our data will be:</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:10}}>{'\u2B24'} Accurate and kept up-to-date</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Collected fairly and for lawful purposes only</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Processed by the company within its legal and moral boundaries</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Protected against any unauthorized or illegal access by internal or external parties</Text>
        <Text style={{ fontFamily:'Montserrat-bold', fontSize:15, marginTop:20}}>Our data will not be:</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:10}}>{'\u2B24'} Communicated informally</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Stored for more than a specified amount of time</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Transferred to organizations, states or countries that do not have adequate data protection policies</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Distributed to any party other than the ones agreed upon by the data's owner (exempting legitimate requests from law enforcement authorities)</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:20}}>In addition to ways of handling the data the company has direct obligations towards people to whom the data belongs. Specifically we must:</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:10}}>{'\u2B24'} Let people know which of their data is collected</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Inform people about how we'll process their data</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Inform people about who has access to their information</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Have provisions in cases of lost, corrupted or compromised data</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Allow people to request that we modify, erase, reduce or correct data contained in our databases</Text>
        <Text style={{ fontFamily:'Montserrat-bold', fontSize:16, marginTop:20}}>Actions</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:20}}> To exercise data protection we're committed to:</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:10}}>{'\u2B24'} Restrict and monitor access to sensitive data</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Develop transparent data collection procedures</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Build secure networks to protect online data from cyberattacks</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Establish clear procedures for reporting privacy breaches or data misuse</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Include contract clauses or communicate statements on how we handle data</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Establish data protection practices (encryption, frequent backups, access authorization etc.)</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:5}}>{'\u2B24'} Screenshot lock for the apk User interface</Text>
        <Text style={{ fontFamily:'Montserrat-bold', fontSize:16, marginTop:20}}>Disciplinary Consequences</Text>
        <Text style={{ fontFamily:'Montserrat-regular', fontSize:15, marginTop:20}}>All principles described in this policy must be strictly followed. A breach of data protection guidelines will invoke disciplinary and possibly legal action.</Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
};

export default Privacy;