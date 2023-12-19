 <script>
    import { Ref } from 'vue';
    import axios from 'axios';
    
    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/channels', {
                withCredentials: true
            })
            console.log(res);
        } catch (e) {
            alert(e.message);
        }
    }
    getData();

    const nameChannel = ref('');
    const createChannel = async () => {
        try {
            const res = await axios.post('http://localhost:3000/api/channels', {
                channelName: nameChannel.value
            }, {
                withCredentials: true
            })
            console.log(res);
            alert('Create Success')
        } catch (e) {
            alert(e.message);
        }
    }

    const selectedId = ref('')
    const nameUpdateChannel = ref('')
    const updateChannel = async () => {
        try {
            const res = await axios.patch('http://localhost:3000/api/channels/${selected.value}', {
                channelName: nameUpdateChannel.value
            }, {
                withCredentials: true
            })
            console.log(res);
            alert('Update Success')
        } catch (e) {
            console.log(e)
            alert(e.message);
        }
    }

    const deleteChannel = async () => {
        try {
            const res = await axios.delete('http://localhost:3000/api/channels/${selected.value}', {
                withCredentials: true
            })
            console.log(res);
            alert('Delete Success')
        } catch (e) {
            console.log(e)
            alert(e.message);
        }
    }
</script>
 
 <template>
    Channels :
    <div v-for="item in channels.docs">
        <div @click="() => selectedId=item.id">{{ item.channelName }}</div>
    </div>
    <br/>
    Create Channels
    <form @submit="createChannel">
        <input type="text" v-model="nameChannel">
        <button type="submit">Create</button>
    </form>
    <br/>
    Seleted id Channel : {{ selected }}
    <br/>
    updateChannel
    <form @submit="updateChannel">
        <input type="text" v-model="nameUpdateChannel">
        <button type="submit">Update</button>
    </form>
    <br/>
    <form @submit="deleteChannel">
        <button type="submit">Delete</button>
    </form>
 </template>
