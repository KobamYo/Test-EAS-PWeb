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
</script>
 
 <template>
    Channels

 </template>