import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

export function Job({ job={} }) {
    return (
        <TouchableOpacity style={styles.job}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{job.company}</Text>
                <Text style={styles.headerDate}>{job.date}</Text>
            </View>

            <View style={styles.info}>
                <View style={styles.position}>
                    <Text style={styles.text}>{job.position}</Text>
                    <Text style={styles.text}>{job.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default function JobsList() {
    const jobs = useSelector((state) => state.jobs.list);

    function renderItem({ item }) {
        return <Job job={item} />;
    }

    function keyExtractor(item) {
        return item.pk;
    }

    return (
        <FlatList
            data={jobs}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.container}
            removeClippedSubviews
        />
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        paddingLeft: 25,
        paddingRight: 25
    },
    job: {
        backgroundColor: '#ECE1FE',
        borderRadius: 16,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        paddingBottom: 16,
        marginBottom: 16,
        alignSelf: 'stretch'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    headerText: {
        fontFamily: 'public-sans-bold',
        fontSize: 18,
        color: '#8A61BF'
    },
    headerDate: {
        color: '#8A61BF',
        fontSize: 12
    }
});

