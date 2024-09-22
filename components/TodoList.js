import {ScrollView, StyleSheet, Text, View} from "react-native";
import {List} from "react-native-paper";

export default ({todos, todoAction}) => {
    return (
        <ScrollView>
            <List.AccordionGroup>
                <List.Accordion title="Todos" id={1}>
                    <List.Section>
                        <View>
                            {todos.filter(todo => !todo.completed).map((todo) => {
                                return (
                                    <List.Item
                                        title={todo.desc}
                                        key={todo.desc}
                                        titleStyle={todo.completed ? style.completed : style.notCompleted}
                                        right={props => <List.Icon {...props}
                                                                   icon={todo.completed ? "check" : "close"}/>}
                                        onPress={() => todoAction(todo)}
                                    />
                                )
                            })}
                        </View>
                    </List.Section>
                </List.Accordion>

                <List.Accordion title="Old todos" id={2}>
                    <List.Section>
                        {todos.filter(todo => todo.completed).map((todo) => {
                            return (
                                <List.Item
                                    title={todo.desc}
                                    key={todo.desc}
                                    titleStyle={todo.completed ? style.completed : style.notCompleted}
                                    right={props => <List.Icon {...props} icon={todo.completed ? "check" : "close"}/>}
                                    onPress={() => todoAction(todo)}
                                />
                            )
                        })}
                    </List.Section>
                </List.Accordion>
            </List.AccordionGroup>
        </ScrollView>
    )
}

let style = StyleSheet.create({
    completed: {
        fontSize: 16,
        textDecorationLine: "line-through"
    },
    notCompleted: {
        fontSize: 16,
    },
    todo: {
        flexDirection: "row",
        alignItems: "center",
    },
    todos: {
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        backgroundColor: "#F00"
    }
})