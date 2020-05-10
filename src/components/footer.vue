<template>
	<div class="et-footer" v-if="show">
		<p>
			Powered by&nbsp;
			<a
				href="https://github.com/shawroger/easytable"
				target="a_blank"
				rel="nofollow noopener noreferrer"
				>EasyTable</a
			>
		</p>
	</div>
</template>

<script>
export default {
	name: "et-footer",
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss">
.et-footer {
	display: flex;
	justify-content: center;
	padding-top: 0px;
	p {
		font-size: 10px;
		color: #d3d3d3;
	}
	a {
		text-decoration: none;
		color: #d3d3d3;
		&:hover {
			color: #c0c4cc;
		}
	}
}
</style>
